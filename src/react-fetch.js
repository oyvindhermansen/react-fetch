// @flow
import * as React from 'react';

interface FetchInterface {
  data: any;
  loading: boolean;
  error: boolean;
  errorInfo: null | {};
  fetchData: null | ((e: Event) => void);
}

type Props = {
  withEvent: boolean,
  url: string,
  method: string,
  options: {},
  asJSON: boolean,
  forceRefetch: boolean,
  children: FetchInterface => React.Node
};

type State = {
  data: any,
  loading: boolean,
  error: boolean,
  errorInfo: null | {}
};

class Fetch extends React.Component<Props, State> {
  state = {
    data: null,
    loading: false,
    error: false,
    errorInfo: null
  };

  static defaultProps = {
    url: '',
    method: 'GET',
    options: {},
    withEvent: false,
    asJSON: true,
    forceRefetch: false
  };

  componentDidMount() {
    const { withEvent } = this.props;
    const { data } = this.state;

    if (!withEvent) {
      if (!data) {
        this.fetchData();
      }
    }
  }

  async fetchData(): Promise<boolean> {
    const { url, method, options, asJSON } = this.props;

    this.setState({ loading: true });

    const opts = {
      ...options,
      method
    };

    try {
      const res = await fetch(url, { ...opts });
      const parsedResponse = asJSON ? await res.json() : await res;

      this.setState({
        data: parsedResponse,
        loading: false,
        error: false
      });
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
        errorInfo: error
      });
    }

    return true;
  }

  triggerFetch = (e: Event): void => {
    const { data } = this.state;
    const { forceRefetch } = this.props;

    if (forceRefetch) {
      this.fetchData();
      return;
    }

    if (!data) {
      this.fetchData();
    }
  };

  render() {
    const { data, loading, error, errorInfo } = this.state;
    const { withEvent, children } = this.props;

    const fetchData = withEvent ? this.triggerFetch : null;

    return children({
      data,
      loading,
      error,
      errorInfo,
      fetchData
    });
  }
}
