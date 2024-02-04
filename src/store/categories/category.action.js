
import { CATEGORIES_ACTION_TYPE } from './category.types';

import { creatAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => creatAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSucceeded = (categories) => creatAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCEEDED, categories);

export const fetchCategoriesFailed = (error) => creatAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSucceeded(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
