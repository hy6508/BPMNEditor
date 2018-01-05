import * as React from 'react';

export interface MainProps {
}

export interface MainState {
}

export default class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        main
      </div>
    );
  }
}
