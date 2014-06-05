modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {
    DOM.decl('main', {
        onSetMod: {
            'js': {
                'inited': function() {
                    var self = this;          
                    this._blockInfo = this.findBlockInside('info');
                    this._blockNotes = this.findBlockInside('notes'); 
                    this._blockSomeNote = this.findBlockInside('some-note');
                    this._removeCat = false;
                                     
                    channel('actions').on('initThisPage', function(e, res) {
                        self._onInitThisPage(res);
                    });

                    channel('actions').on('minimizeNotes', function(e, res) {
                        self._onMinimizeNotes();
                    });
                    
                    channel('actions').on('addNewCategory', function(e, res) {
                        self._onNewCategoryAdd(res);
                    });   

                    channel('actions').on('removeCat', function(e, res) {
                        self._onRemoveItem(res);
                    });
                    
                    channel('actions').on('addNewNote', function(e, res) {
                        self._onNewNoteAdd(res);
                    });
                    
                    channel('actions').on('formNewCatShow', function() {
                        self._onFormShow();
                    });  
                    
                    channel('actions').on('formNewNoteShow', function() {
                        self._onFormNoteShow();
                    });

                    channel('actions').on('formEditNoteShow', function(e, res) {
                        self._onFormEditNoteShow(res);
                    });
                    
                    channel('actions').on('loadFilteredNotes', function(e, res) {
                        self._onLoadFilteredNotes(res);
                    });
                    
                    channel('actions').on('sendNoteType', function(e, res) {
                        self._onSendNoteType(res);
                    });       
                }
            }
        },
        
        /*_checkedRemoveMod: function(res) {
            var removeItem = this.findBlockInside('menu-tools').findElem('item')[2];
            console.log(this.findBlockInside('menu-tools').hasMod(removeItem, 'deleted', 'on'));  
        },*/
        
        _onSendNoteType: function(thisCategorie) {
            var noteForm = this.findBlockInside('new-note-form');
            if (noteForm !== null) {
                noteForm.findElem('type-note').val(thisCategorie.toUpperCase());   
            }            
        },
        
        _onMinimizeNotes: function() {
            this.findBlocksInside('some-note').forEach(function(note) {
                note.toggleMod('minimize', 'on');
            });
        },
        
        _clearNotes: function() {
           this.findBlocksInside('some-note').forEach(function(note) {
                DOM.destruct(note.domElem);
            }); 
        },
        
        _onInitThisPage: function(thisCategorie) {
            var filteredPageStorageData = JSON.parse(localStorage['MNotes']).pages[thisCategorie],
                thisDataObj,
                arrLength = filteredPageStorageData.length,
                noteData, i, key;
        
            //this._checkedRemoveMod();
            this._clearNotes(); 
            
            for (i = 0; i < arrLength; i++) {
                noteData = filteredPageStorageData[i];
                for (key in noteData) {
                    DOM.prepend(
                        this._blockNotes.domElem,
                        BEMHTML.apply({
                            block: 'some-note',
                            content: [
                                {
                                    block: 'header-note',
                                    content: [
                                        {
                                            elem: 'title-note',
                                            content: noteData[key]['name-note']
                                        },
                                        {
                                            elem: 'edit-note'
                                        },
                                        {
                                            elem: 'tools-note',
                                        }
                                    ]
                                },
                                {
                                    elem: 'text-note',
                                    content:  noteData[key]['text-note']
                                }
                            ]
                             
                        })
                    );
                }
            }
        },
        
        _onNewCategoryAdd: function(title) { 
            var storage = JSON.parse(localStorage['MNotes']);
            if (!title || storage.pages[title]) return;
            
            DOM.append(
                this._blockInfo.domElem,
                BEMHTML.apply({
                    block: 'info',
                    elem: 'categories',
                    content: title
                })
            );  
            
            DOM.destruct(this.findBlockInside('new-note-page').domElem);
            this._saveCatToLocal(title);
        },
        
        _onNewNoteAdd: function(formData) {
            if (formData['type-note'].trim().length !== 0 && formData['name-note'].trim().length !== 0  && this._checkNoteExist(formData['name-note'])) {
                DOM.prepend(
                    this._blockNotes.domElem,
                    BEMHTML.apply({
                        block: 'some-note',
                        content: [
                            {
                                block: 'header-note',
                                content: [
                                    {
                                        elem: 'title-note',
                                        content: formData['name-note']
                                    },
                                    {
                                        elem: 'edit-note'
                                    },
                                    {
                                        elem: 'tools-note',
                                    }
                                ]
                            },
                            {
                                elem: 'text-note',
                                content:  formData['text-note']
                            }
                        ]
                         
                    })
                );    
                DOM.destruct(this.findBlockInside('new-note-form').domElem);
                this._saveNoteToLocal(formData);
            }
        },
        
        _onFormShow: function() {
            if (this._beforeFormShow('new-note-form', 'new-note-page')) {
                DOM.append(
                    this.domElem,
                    BEMHTML.apply({
                        block: 'new-note-page',
                        content: [
                            {
                                elem: 'title-list',
                                content: 'Новая страница'
                            }, 
                            {
                                block: 'field-data',
                                content: [
                                    {
                                        elem: 'input-data'
                                    },
                                    {
                                        elem: 'button-add',
                                        content: 'Добавить'
                                    },
                                    {
                                        elem: 'button-cancel',
                                        content: 'Отмена'
                                    }
                                ]
                            }
                        ]
                    })
                )
            }            
        },
        
        _onFormNoteShow: function() {
            if (this._beforeFormShow('new-note-page', 'new-note-form')) {
                DOM.append(
                    this.domElem,
                    BEMHTML.apply({
                        block: 'new-note-form',
                        content: [
                            {
                                elem: 'title-note',
                                content: 'Новая заметка'
                            },
                            {
                                elem: 'inputs-note',
                                content: [
                                    { elem: 'type-note' },
                                    { elem: 'name-note' },
                                    { elem: 'text-note' },
                                    { elem: 'button-add', content: 'Добавить' },
                                    { elem: 'button-cancel', content: 'Отмена' }
                                ]
                            }
                        ]
                    })
                )
            }
        },
        
        _onFormEditNoteShow: function(dataForEdit) {
            if (this._beforeFormShow('new-note-page', 'new-note-form')) {
                DOM.append(
                    this.domElem,
                    BEMHTML.apply({
                        block: 'new-note-form',
                        content: [
                            {
                                elem: 'title-note',
                                content: 'Редактирование'
                            },
                            {
                                elem: 'inputs-note',
                                content: [
                                    { elem: 'name-note', attrs: { disabled: 'disabled', value: dataForEdit.nameNote } },
                                    { elem: 'text-note', content: dataForEdit.textNote },
                                    { elem: 'button-save', content: 'Изменить' },
                                    { elem: 'button-cancel', content: 'Отмена' }
                                ]
                            }
                        ]
                    })
                )
            }
        },
        
        _onLoadFilteredNotes: function(data) {
            this._clearNotes(); 
        
            data.forEach(function(noteData) {
                DOM.append(
                    this._blockNotes.domElem,
                    BEMHTML.apply({
                        block: 'some-note',
                        content: [
                            {
                                block: 'header-note',
                                content: [
                                    {
                                        elem: 'title-note',
                                        content: noteData['name-note']
                                    },
                                    {
                                        elem: 'edit-note'
                                    },
                                    {
                                        elem: 'tools-note',
                                    }
                                ]
                            },
                            {
                                elem: 'text-note',
                                content:  noteData['text-note']
                            }
                        ]
                    })
                );
            }, this);
        },
        
        _beforeFormShow: function(formForChecked, formForShow) {
            if (this.findBlockInside(formForChecked) !== null) {
                DOM.destruct(this.findBlockInside(formForChecked).domElem);
            }
            return (this.findBlockInside(formForShow) === null) ? true : false;
        },
        
        _checkNoteExist: function(noteName) {
            var storage = JSON.parse(localStorage['MNotes']).pages,
                page, notes, note,
                bool;
           
            for (page in storage) {
                storage[page].forEach(function(notes) {
                    for (note in notes) {
                        if (noteName === note) {
                            bool = false;
                        }                        
                    }
                });
            }
            return (bool === undefined) ? true : false;
        },
        
        _saveCatToLocal: function(pageName) {
            var storage = JSON.parse(localStorage['MNotes']); 
            storage.pages[pageName.toUpperCase()] = [];
            localStorage['MNotes'] = JSON.stringify(storage);            
        },
        
        _saveNoteToLocal: function(data) {
            var storage = JSON.parse(localStorage['MNotes']),
                noteObj = {};
                
            noteObj[[data['name-note']]] = data;
            storage.pages[data['type-note'].toUpperCase()].push(noteObj);
            localStorage['MNotes'] = JSON.stringify(storage);
        }
});
provide(DOM);
});