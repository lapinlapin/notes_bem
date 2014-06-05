modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {

    DOM.decl('menu-tools', {
        _onToolClick: function(elemItem) {
            var methods = this._methods;
            Object.keys(methods)
                .forEach(function(action) {
                    if (this.hasMod(elemItem, 'action', action)) {
                        methods[action](elemItem, this);
                    }
            }, this);
           
        },
        _methods: {
            'add': function() {
                channel('actions').emit('formNewCatShow');
            },
            'edit': function() {
                channel('actions').emit('formNewNoteShow');
            },
            /*'remove': function(elem, self) {
                self.toggleMod(elem, 'deleted', 'on');
            },*/
            'settings': function() {
                channel('actions').emit('minimizeNotes');
            }
        }
    },
    {
        live: function() {
            this.liveBindTo('item', 'click', function(e) {
                this._onToolClick(e.currentTarget);
            });
            return false;
        }
    });
provide(DOM);
});