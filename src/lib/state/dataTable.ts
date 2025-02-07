interface ColumnSettings {
	name: string;
	index: number;
	width: number;
	height: number;
	isVisible: boolean;
	isFrozen: boolean;
}

interface DataTable {
	columns: ColumnSettings[];
}

export const DataTableState: DataTable = $state({
	data: [],
	columns: [],
	rows: []
});
