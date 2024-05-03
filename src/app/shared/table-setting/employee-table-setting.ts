export class EmployeeTableSetting{
    public static setting = {
        mode: 'external',
        hideSubHeader: false,
        actions: {
          position: 'right',
          add: false,
          edit : false,
          delete : false,
          custom: [
            { name: 'editrecord', title: 'Edit'},
            { name: 'activerecord', title: 'Activate' },
            { name: 'deactiverecord', title: 'Deactivate' },
          ],
        },
        pager :{
          perPage : 10
        },
        columns: {
        empId: {
            title: 'Emp Id'
          },
          empName: {
            title: 'Emp name'
          },
          mobile: {
            title: 'Mobile',
          },
          emailId: {
            title: 'Email Id'
          },
          empRole: {
            title: 'Role'
          },
          circleName :{
              title : "Circle"
          },
          activeStatus: {
            title: 'Active'
          }
        }
    }
}