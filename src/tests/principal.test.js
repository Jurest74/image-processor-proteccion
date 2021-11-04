import renderer from 'react-test-renderer';
import A4Sheet from '../component/A4-sheet.component.jsx';
import UploadImage from '../component/upload-image.jsx';
import {store} from '../redux/store';
import { Provider } from 'react-redux';

describe('pruebas en A4Sheet component', () =>{
    test('render A4Sheet component', () => {
        const component = renderer.create(
            <Provider store={store}>
                <A4Sheet
                    AdjustImage={false}
                />
            </Provider>,
        );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    })
});

describe('pruebas en UploadImage component', () =>{
    test('render UploadImage component', () => {
        const component = renderer.create(
            <Provider store={store}>
                <UploadImage />
            </Provider>,
        );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    })
})