import React from 'react';

interface MeteorChildren {
    children: React.ReactElement;
}

export default function MeteorInfo(props: MeteorChildren) {
  return (
    <div className="flex flex-col items-center p-5">
       {props.children}
    </div>
  )
}
