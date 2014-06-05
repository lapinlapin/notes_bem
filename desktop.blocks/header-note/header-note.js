modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {
    DOM.decl('header-note', {            
        _removeFromStorage: function(noteForRemove) {
            var storage = JSON.parse(localStorage['MNotes']).pages,
                page, nameNote;
               
            for (page in storage) {             
                storage[page].forEach(function(notes) {
                    for (nameNote in notes) {
                        if (nameNote === noteForRemove) {
                            delete notes[nameNote];
                        }
                    }
                });
            }    
            localStorage['MNotes'] = JSON.stringify({'pages': storage});
        },

        _onEditNote: function() {
            var paramsForEdit = {
                    textNote: this.findBlockOutside('some-note').findElem('text-note').text(),
                    nameNote: this.findBlockOutside('header-note').findElem('title-note').text()
                }
            channel('actions').emit('formEditNoteShow', paramsForEdit);
        }
        
    }, {
        live: function() {
            this.liveBindTo('tools-note', 'click', function(e) { 
                this._removeFromStorage(this.findElem('title-note').text());
                DOM.destruct(this.findBlockOutside('some-note').domElem);
            });
                    
            this.liveBindTo('edit-note', 'click', function(e) {
                this._onEditNote();
            });
            
            this.liveBindTo('dblclick', function(e) {
                this._onEditNote();
            });
        }
    });
provide(DOM);
});
