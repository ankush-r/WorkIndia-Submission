import React from 'react';
import CandidateCard from './Card';
// import CandidateCard from './CandidateCard'; // Import your CandidateCard component

const CandidateColumn = (props) => {
	const { name, candidates } = props;
	// console.log(candidates);

	return (
		<div class="d-flex align-items-start justify-content-around flex-column flex-flow gap-4">
			<div className='font-weight-bold h3'>{name}</div>
			{candidates.map((candidate, index) => (
				<CandidateCard key={index} data={candidate} />
			))}
		</div>
	);
};

export default CandidateColumn;
