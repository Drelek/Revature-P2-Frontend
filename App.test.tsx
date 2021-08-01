import Enzyme from 'enzyme'
import React from 'react';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './redux/session_reducers';
import SplashScreen from './screens/SplashScreen'
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import PostCard from './screens/PostCard'
import LoginScreen from './screens/LoginScreen'
import HomeFeedScreen from './screens/HomeFeed'
import ExpandedPost from './screens/ExpandedPost';
import AddComment from './screens/AddComment';
import handleCanvas from './components/canvas';
import FeedPicker from './components/feedPicker';
import FollowIcon from './components/followIcon';
import GlobalEye from './components/globalEye';
import Logo from './components/logo';
import { Menu } from 'react-native-paper';
import MenuIcon from './components/menuIcon';
import Canvas from './screens/Canvas';
import SearchScreen from './screens/SearchScreen';
import IndividualComment from './screens/IndividualComment';
import SignUpScreen from './screens/SignUpScreen';
import Feed from './components/Feed';







const store = createStore(reducers);
Enzyme.configure({ adapter: new Adapter() });

/*
**  Screen Render Testing
**
*/
describe('SplashScreen', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><SplashScreen /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('Canvas', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><Canvas /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('SearchScrean', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><SearchScreen /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('Settings', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><Settings /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('Profile', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><Profile /></Provider>);
        expect(component).toMatchSnapshot();
    });
})



describe('LoginScreen', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><LoginScreen /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('HomeFeedScreen', () => {
    it('renders without crashing', () => {
        const component = shallow(<HomeFeedScreen />);
        expect(component).toMatchSnapshot();
    });
})

describe('Expanded Post', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><ExpandedPost /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('AddComment', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><AddComment /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('PostCard', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><PostCard /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('IndividualComment', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><IndividualComment /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('SignUpScrean', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><SignUpScreen /></Provider>);
        expect(component).toMatchSnapshot();
    });
})
/*
**  Component Render Testing
**
*/

describe('Canvas comp', () => {
    it('renders without crashing', () => {
        const component = shallow(<handleCanvas />);
        expect(component).toMatchSnapshot();
    });
})


describe('FollowIcon comp', () => {
    it('renders without crashing', () => {
        const component = shallow(<FollowIcon />);
        expect(component).toMatchSnapshot();
    });
})

describe('Feed comp', () => {
    it('renders without crashing', () => {
        const component = shallow(<Provider store={store}><Feed /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('GlobalEye comp', () => {
    it('renders without crashing', () => {
        const component = shallow(<GlobalEye />);
        expect(component).toMatchSnapshot();
    });
})

describe('Logo comp', () => {
    it('renders without crashing', () => {
        const component = shallow(<Logo />);
        expect(component).toMatchSnapshot();
    });
})



