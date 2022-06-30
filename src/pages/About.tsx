import { connect, ConnectedProps } from 'react-redux';
import { Component, ReactNode } from 'react';
import { Container } from 'native-base';
import { RootState } from '../core/redux/store';

class About extends Component<CustomProps, State> {

    render(): ReactNode {
        return (
            <Container></Container>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
});

const mapDispatchToProps = {
}

const connector = connect<CustomProps>(mapStateToProps, mapDispatchToProps)(About);

export default connector;

type OwnProps = {
    navigation: any;
};

type ReduxProps = ConnectedProps<typeof connector>;

type CustomProps = ReduxProps;

type State = {}
