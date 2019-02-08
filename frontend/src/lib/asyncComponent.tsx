import * as React from 'react';

type GetComponentPayload = {
  default: any;
};

const asyncComponent = (getComponent: any) => {
  class AsyncComponent extends React.Component {
    static Component: any = null;

    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }: GetComponentPayload) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }

  (AsyncComponent as any).getComponent = () => {
    return getComponent().then(({ default: Component }: GetComponentPayload) => {
      AsyncComponent.Component = Component;
    });
  };

  return AsyncComponent;
};

export default asyncComponent;
