import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
   /* TR: Set initialLaunchTime to null to stop launch */
  const [initialLaunchTime] = useState(null);

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /* TR: Set initialLaunchTime to null to stop launch */
      initialLaunchTime: null
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
