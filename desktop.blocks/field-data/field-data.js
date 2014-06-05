modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {
    DOM.decl('field-data', {      
        onSetMod: {
            'js': {
                'inited': function() {
                    this.bindTo('button-add', 'click', function(e) {                 
                        channel('actions').emit('addNewCategory', this.getNewValue());
                    });
                    
                    this.bindTo('button-cancel', 'click', function(e) {
                        DOM.destruct(this.findBlockOutside('new-note-page').domElem);
                    });
                }
            }
        },      
        getNewValue: function() {
            return this.findElem('input-data').val();
        }        
    });
provide(DOM);
});
