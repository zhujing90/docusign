	export const menuOptions = [
		{
			html: () => 'Container ID',
			click: (item, $event) => {
				alert(item.cdsl_Id);
			},
		},
		{
			html: (): string => 'Check In',
			click: (item, $event): void => {
				alert("Check in");
			},
			enabled: (item): boolean => {
				return item.container_Label.match(/Test/) == null;
			}
		},
		{
			html: () => 'Container label Name',
			click: (item) => {
				alert(item.container_Label);
			},
		},
		{
			html: () => '...',
			click: (item) => {
				alert("tesst");
			},
		}
	];