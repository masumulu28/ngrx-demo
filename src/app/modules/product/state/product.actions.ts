import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../models/product';

/**
 * Load Products
 */
export const loadProducts = createAction(
  '[Product Component] Load Products'
);

export const loadAdminProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Effect] Load Products Failure',
  props<{ error: any }>()
);

/**
 * Load individual product
 */
export const loadProduct = createAction(
  '[Product Detail Component] Load Product',
  props<{ id: number }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure',
  props<{ error: any }>()
);

/**
 * Add individual product
 */
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product Effect] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product Effect] Add Product Failure',
  props<{ error: any }>()
);

/**
 * Update individual product
 */
export const upsertProduct = createAction(
  '[Product Edit Component] Upsert Product',
  props<{ product: Product }>()
);
export const upsertProductSuccess = createAction(
  '[Product Effect] Upsert Product Success',
  props<{ product: Product }>()
);
export const upsertProductFailure = createAction(
  '[Product Effect] Upsert Product failure',
  props<{ error: any }>()
);

/**
 * Delete individual product
 */
export const deleteProduct = createAction(
  '[Product List Component] Delete Product',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product Effect] Delete Product Success'
);
export const deleteProductFailure = createAction(
  '[Product Effect] Delete Product Failure',
  props<{ error: any }>()
);

export const clearProducts = createAction(
  '[Product/API] Clear Products'
);
