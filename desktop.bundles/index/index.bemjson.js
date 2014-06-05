({
    block: 'page',
    title: 'MNotes',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }, {elem: 'js', url: 'index.bemhtml.js'}],
    content: [
        {
            block: 'main', 
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            elem: 'logo',
                            content: 'MNotes'
                        },
                        {
                            block: 'menu-tools',
                            controls: [
                                'add',
                                'edit',
                                //'remove',
                                'settings'
                            ]
                        }
                    ]
                },
                {
                    block: 'find-notes'
                },
                {
                    block: 'info',
                    content: [
                    ]
                },         
                {
                    block: 'notes',
                    content: []
                }   
            ]
        }
    ]
})
