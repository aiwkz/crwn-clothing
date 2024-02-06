
import { CATEGORIES_ACTION_TYPE } from './category.types';

import { creatAction } from '../../utils/reducer/reducer.utils';

export const fetchCategoriesStart = () => creatAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) => creatAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) => creatAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
