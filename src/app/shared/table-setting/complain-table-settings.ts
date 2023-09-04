export class ComplainTableSetting{
    public static setting = {
        mode: 'external',
        hideSubHeader: false,
        actions: {
          position: 'right',
          add: false,
          edit : false,
          delete : false,
          custom: [
            { name: 'viewRecord', title: 'View'}
          ],
        },
        pager :{
          perPage : 10
        },
        columns: {
        complainId: {
            title: 'Complaint Id'
          },
          srNumber: {
            title: 'SR Number'
          },
          raiseBy:{
              title : 'Raise By'
          },
        //   description: {
        //     title: 'Description',
        //   },
          raiseDate: {
            title: 'Raise Date'
          },
        //   image:{
        //     title: 'Screen shot',
        //     type: 'html',
        //     valuePrepareFunction : (value) => { return `<img src="${value}" class="icon" />` }
        //   },
          closeDate: {
            title: 'Close Date'
          },
          status :{
              title : "Status",
              width : '70px'
          }
        }
    }
}