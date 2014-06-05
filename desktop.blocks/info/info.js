modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {
    
    DOM.decl('info', {

        onSetMod: {
            'js': {
                'inited': function() {
                    this._checkStorage();
                    this._readFromLocal();
                }
            } 
        },
        
        _readFromLocal: function() {
            var storage = JSON.parse(localStorage['MNotes']).pages,
                key;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    DOM.append(
                        this.domElem,
                        BEMHTML.apply({
                            block: 'info',    
                            elem: 'categories',
                            content: key
                        })
                    );     
                }
            }
        },
        
        _checkStorage: function() {
            if (!localStorage['MNotes']) {
                localStorage['MNotes'] = JSON.stringify({'pages': {}});
            }
        },
        
        _removeFromStorage: function(nameSpace, item) {
            delete nameSpace[item];
            localStorage['MNotes'] = JSON.stringify({'pages': nameSpace});
        },
        
        _onCategorieDblClick: function(thisCategorie) {
            var storage = JSON.parse(localStorage['MNotes']).pages;
            DOM.destruct(thisCategorie);
            this._removeFromStorage(storage, thisCategorie.text());
        },

        _onCategorieClick: function(thisCategorie) {
            channel('actions').emit('initThisPage', thisCategorie.text().toUpperCase());
        },
        
        _sendToFormForNoteType: function(thisCategorie) {
            channel('actions').emit('sendNoteType', thisCategorie.text());
        }
        
    }, {
        live: function() {
            this.liveBindTo('categories', 'dblclick', function(e) {
                this._onCategorieDblClick(e.currentTarget);
            });
            
            this.liveBindTo('categories', 'click', function(e) {
                this._onCategorieClick(e.currentTarget);
                this._sendToFormForNoteType(e.currentTarget);
            });
        }
    });

provide(DOM);
});