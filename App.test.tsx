import Enzyme, { mount, render, shallow } from 'enzyme'
import React from 'react';
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
import { IAppState } from './redux/store';
import * as redux from 'react-redux';
import { AppAction } from './redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import renderer from 'react-test-renderer';
import Feed from './components/Feed';
import { FlatList, TextInput } from 'react-native';
import { View } from 'react-native';







const store = createStore(reducers);
Enzyme.configure({ adapter: new Adapter() });
jest.mock('@react-navigation/native');
jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    const LOGOUT = "LOGOUT";

    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return mockState;
        }),
        useDispatch: jest.fn().mockImplementation(() => {
            return mockState;
        }),
        useNavigation: jest.fn().mockImplementation(() => {
            return mockState;
        })
    };
});

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue()

const mockState: IAppState = {
    auth: {
        AccessToken : 12345
    },
    user: {
        profileImg: "captainhat.png",
        userName: "theGuack",
        email: "testing@testtest.net",
        displayName: "HolyGuack",
        followers: ["a", "b", "c"],
        following: ["d", "e", "f"]

    },
    canvas: true,
    feed: true
}

const props = {
    route : {
        params : 
            { likes : ["a", "b", "c"] },
    },
    item : {
        comments : { L : ["a", "b", "c"] },
        dataKey : { S : "theGuack" },
        dataType : { S : "post" },
        displayImg : { S : "captainhat.png" },
        displayName : { S: "HolyGuack" },
        likes : { SS : ["a", "b", "c"] },
        postBody : { S : "Dis is a postBody" },
        userName : { S : "theGuack" }

    }
}
/*
**  Screen shallow Testing
**
*/

test('should match the Profile tree', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Profile {...props} ></Profile>
        </Provider>
      
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test('should match the ExpandedPost tree', () => {
    const component = renderer.create(
        <Provider store={store}>
            <ExpandedPost {...props} ></ExpandedPost>
        </Provider>
      
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test('should match the ExpandedPost tree', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Feed {...props} ></Feed>
        </Provider>
      
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test('should match the PostCard tree', () => {
    const component = renderer.create(
        <Provider store={store}>
            <PostCard {...props} ></PostCard>
        </Provider>
      
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test('should match the Settings tree', () => {
    const component = renderer.create(
      <Settings></Settings>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    //tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    //tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  
// it('should render the image icons in PostCard', () => {
//     const wrapper = shallow(<NavigationContainer><PostCard /></NavigationContainer>);
//     expect(wrapper.find(Image).exists()).toBe(true);
//   });

//   it('should render the flatlist in Feed', () => {
//     const wrapper = shallow(<NavigationContainer><Feed /></NavigationContainer>);
//     expect(wrapper.find(View).exists()).toBe(true);
//   });

describe('SplashScreen', () => {
    it('shallows without crashing', () => {
        const component = shallow(<SplashScreen />);
        expect(component).toMatchSnapshot();
    });
})

describe('SplashScreen', () => {
    it('shallows without crashing', () => {
        const component = render(<SplashScreen />);
        expect(component).toMatchSnapshot();
    });
})

describe('Settings', () => {
    it('shallows without crashing', () => {
        const component = shallow(<Settings />);
        expect(component).toMatchSnapshot();
    });
})

describe('Profile', () => {
    it('shallows without crashing', () => {
        const component = shallow(<Provider store={store}><Profile /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('PostCard', () => {
    it('shallows without crashing', () => {
        const component = shallow(<Provider store={store}><PostCard /></Provider>);
        expect(component).toMatchSnapshot();
    });
})



describe('LoginScreen', () => {
    it('shallows without crashing', () => {
        const component = shallow(<Provider store={store}><LoginScreen /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('HomeFeedScreen', () => {
    it('shallows without crashing', () => {
        const component = shallow(<HomeFeedScreen />);
        expect(component).toMatchSnapshot();
    });
})

describe('Expanded Post', () => {
    it('shallows without crashing', () => {
        const component = shallow(<Provider store={store}><ExpandedPost /></Provider>);
        expect(component).toMatchSnapshot();
    });
})

describe('AddComment', () => {
    it('shallows without crashing', () => {
        const component = shallow(<AddComment />);
  
        expect(component).toMatchSnapshot();
    });
})

// describe('ExpandedPost', () => {
//     it('add state to the component', () => {


//         const component = shallow(<AddComment {...mockState} />);
//         component.setState({...mockState});
//         const instance = component.instance();
//         expect(instance.state).toEqual(mockState);
//     })
// })

/*
**  Component shallow Testing
**
*/

describe('Canvas comp', () => {
    it('shallows without crashing', () => {
        const component = shallow(<handleCanvas />);
        expect(component).toMatchSnapshot();
    });
})


describe('FollowIcon comp', () => {
    it('shallows without crashing', () => {
        const component = shallow(<FollowIcon />);
        expect(component).toMatchSnapshot();
    });
})

describe('GlobalEye comp', () => {
    it('shallows without crashing', () => {
        const component = shallow(<GlobalEye />);
        expect(component).toMatchSnapshot();
    });
})

describe('Logo comp', () => {
    it('shallows without crashing', () => {
        const component = shallow(<Logo />);
        expect(component).toMatchSnapshot();
    });
})

