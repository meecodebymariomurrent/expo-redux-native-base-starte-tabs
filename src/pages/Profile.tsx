import { connect, ConnectedProps } from 'react-redux';
import { Component, ReactNode } from 'react';
import { Container } from 'native-base';
import { countUp, resetCounter } from '../core/redux/actions/counterAction';
import { RootState } from '../core/redux/store';

class Profile extends Component<CustomProps, State> {

    render(): ReactNode {
        return (
            <Container></Container>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    dispatchCountUp: countUp,
    dispatchResetCounter: resetCounter
}

const connector = connect<CustomProps>(mapStateToProps, mapDispatchToProps)(Profile);

export default connector;

type OwnProps = {
    navigation: any;
};

type ReduxProps = ConnectedProps<typeof connector>;

type CustomProps = ReduxProps;

type State = {}
