 export const menuOptions = [
    {
      html: () => 'Open File',
      click: (item, $event) => {
         alert(item.cdsl_Id);
      },
    },
    {
      html: (): string => 'Open File in Viewer',
      click: (item, $event): void => {
        alert("Check in");
      },
      enabled: (item): boolean => {
        return item.documentName.match(/pdf/) == null;
      }
    },
    {
      html: () => 'Update from Server',
      click: (item) => {
        alert(item.documentName);
      },
    },
    {
      html: () => 'New Version',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Check Out',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Check Out(Read/Write)',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Upgrade to Read/Write',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Move/Copy',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Preserve',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Relate Documents',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'Delete',
      click: (item) => {
        alert(item.documentName);
      },
    },
     {
      html: () => 'To Do Activity',
      click: (item) => {
        alert(item.documentName);
      },
    },
    {
      html: () => '',
      divider:true,
      click: (item) => {
        alert("123");
      },
    },
     {
      html: () => 'View Information',
      click: (item) => {
        alert(item.documentName);
      },
    },
  ];