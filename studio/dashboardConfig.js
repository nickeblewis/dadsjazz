export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'dadsjazz-studio',
                  apiId: '83ceca38-b110-4f83-9eef-4a814b07f82c'
                },
                {
                  buildHookId: '5cffdd757f17cdc885872567',
                  title: 'Events Website',
                  name: 'dadsjazz',
                  apiId: 'e75d6a12-9932-4c73-bbad-fb21b69452dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/dadsjazz',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dadsjazz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
