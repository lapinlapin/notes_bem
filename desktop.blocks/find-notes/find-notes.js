modules.define('i-bem__dom', ['BEMHTML', 'events__channels'], function(provide, BEMHTML, channel, DOM) {
    DOM.decl('find-notes', {      
        onSetMod: {
            'js': {
                'inited': function() {  
                    this.bindTo('keydown', function(e) {
                        if (e.which == 13) {
                            this._onKeyDown(e.currentTarget);
                        } 
                    });
                }
            }
        },

        _onKeyDown: function(e) {
            var storage = JSON.parse(localStorage['MNotes']).pages,
                queryStr = e.value,
                key, linkOnNoteData,
                filteredNotes = [];
                
            for (key in storage) {
                storage[key].forEach(function(dataObj) {
                    for (linkOnNoteData in dataObj) {
                        if (linkOnNoteData.toLowerCase().indexOf(queryStr.toLowerCase(), 0) !== -1 ||
                            dataObj[linkOnNoteData]['text-note'].toLowerCase().indexOf(queryStr.toLowerCase(), 0) !== -1) {
                            filteredNotes.push(dataObj[linkOnNoteData]);
                        }
                    }
                });
            }
            channel('actions').emit('loadFilteredNotes', filteredNotes);
        } 
    });
provide(DOM);
});
