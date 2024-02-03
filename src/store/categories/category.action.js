
import { CATEGORIES_ACTION_TYPE } from './category.types';
import { creatAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categories) => creatAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);
