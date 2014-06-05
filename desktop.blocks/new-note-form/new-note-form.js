modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {
    DOM.decl('new-note-form', {      
        onSetMod: {
            'js': {
                'inited': function() { 
                    this.bindTo('button-add', 'click', function(e) {                 
                        channel('actions').emit('addNewNote', this._getFormValues());        
                    });
                    
                    this.bindTo('button-cancel', 'click', function(e) {
                        DOM.destruct(this.findBlockOutside('new-note-form').domElem);
                    });
                    
                    this.bindTo('button-save', 'click', function(e) {
                        this._saveEditData(this._getFormValues('type-note'));
                        DOM.destruct(this.domElem);
                    });
                }
            }
        },     
        
        _getFormValues: function(elemNotCheck) {
            var formData = {},
                self = this,
                formElems = ['type-note', 'name-note', 'text-note'],
                checker = {            
                    allCheck: function() {
                        formElems.forEach(function(elem) {
                            formData[elem] = self.findElem(elem).val();
                        });
                    },
                    
                    filterCheck: function() {
                        formElems.forEach(function(elem) {
                            if (elemNotCheck !== elem) {
                                formData[elem] = self.findElem(elem).val();
                            }
                        });
                    }         
                };
            
            (!elemNotCheck || typeof elemNotCheck !== 'string') ? checker.allCheck() : checker.filterCheck();           
            return formData;
        },
        
        _saveEditData: function(data) {
             var storage = JSON.parse(localStorage['MNotes']).pages,
                 noteName = data['name-note'],
                key, linkOnNoteData;
                
            for (key in storage) {
                storage[key].forEach(function(dataObj) {
                    for (linkOnNoteData in dataObj) {
                        if (linkOnNoteData.toLowerCase().indexOf(noteName.toLowerCase(), 0) !== -1) {
                            dataObj[linkOnNoteData] = data;
                            break;
                        }
                    }
                });
            }
            localStorage['MNotes'] = JSON.stringify({'pages': storage});
        }
    });
provide(DOM);
});