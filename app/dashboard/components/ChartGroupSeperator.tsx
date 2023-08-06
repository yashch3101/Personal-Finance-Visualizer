import React from 'react';

interface ChartGroupSeperatorProps {
	title: string;
}

const ChartGroupSeperator = ({ title }: ChartGroupSeperatorProps) => {
	return (
		<div className="flex items-center gap-4 my-6">
			<div className="bg-border flex-1 h-[2px] bg-lime-600 dark:bg-lime-400" />
			<h2 className="text-center scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				{title}
			</h2>
			<div className="bg-border flex-1 h-[2px] bg-lime-600 dark:bg-lime-400" />
		</div>
	);
};

export default ChartGroupSeperator;
