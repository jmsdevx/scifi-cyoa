import React from "react";

const ArchetypeDisplay = props => {
  const buttonFactory = props.archetypes.map((e, i) => {
    return (
      <button key={e.archetype_id} onClick={() => props.save(e.name)}>
        {e.name}
      </button>
    );
  });
  return <div>{buttonFactory}</div>;
};
export default ArchetypeDisplay;
