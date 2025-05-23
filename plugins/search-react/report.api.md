## API Report File for "@backstage/plugin-search-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ApiRef } from '@backstage/core-plugin-api';
import { AsyncState } from 'react-use/esm/useAsync';
import { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import { Dispatch } from 'react';
import { DispatchWithoutAction } from 'react';
import { Extension } from '@backstage/core-plugin-api';
import { ForwardRefExoticComponent } from 'react';
import { JsonObject } from '@backstage/types';
import { JsonValue } from '@backstage/types';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LinkProps } from '@backstage/core-components';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemTextProps } from '@material-ui/core/ListItemText';
import { ListProps } from '@material-ui/core/List';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { ResultHighlight } from '@backstage/plugin-search-common';
import { SearchDocument } from '@backstage/plugin-search-common';
import { SearchQuery } from '@backstage/plugin-search-common';
import { SearchResult as SearchResult_2 } from '@backstage/plugin-search-common';
import { SearchResultSet } from '@backstage/plugin-search-common';
import { SetStateAction } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { TypographyProps } from '@material-ui/core/Typography';

// @public (undocumented)
export const AutocompleteFilter: (
  props: SearchAutocompleteFilterProps,
) => JSX_2.Element;

// @public (undocumented)
export const CheckboxFilter: (
  props: SearchFilterComponentProps,
) => JSX_2.Element;

// @public
export const createSearchResultListItemExtension: <
  Component extends (props: any) => JSX.Element | null,
>(
  options: SearchResultListItemExtensionOptions<Component>,
) => Extension<Component>;

// @public (undocumented)
export const DefaultResultListItem: (
  props: DefaultResultListItemProps,
) => JSX_2.Element;

// @public
export type DefaultResultListItemProps = {
  icon?: ReactNode;
  secondaryAction?: ReactNode;
  result?: SearchDocument;
  highlight?: ResultHighlight;
  rank?: number;
  lineClamp?: number;
  toggleModal?: () => void;
};

// @public (undocumented)
export type FilterValue = string | FilterValueWithLabel;

// @public (undocumented)
export type FilterValueWithLabel = {
  value: string;
  label: string;
};

// @public (undocumented)
export const HighlightedSearchResultText: (
  props: HighlightedSearchResultTextProps,
) => JSX_2.Element;

// @public (undocumented)
export type HighlightedSearchResultTextClassKey = 'highlight';

// @public
export type HighlightedSearchResultTextProps = {
  text: string;
  preTag: string;
  postTag: string;
};

// @public
export class MockSearchApi implements SearchApi {
  constructor(mockedResults?: SearchResultSet | undefined);
  // (undocumented)
  mockedResults?: SearchResultSet | undefined;
  // (undocumented)
  query(): Promise<SearchResultSet>;
}

// @public (undocumented)
export interface SearchApi {
  // (undocumented)
  query(query: SearchQuery): Promise<SearchResultSet>;
}

// @public (undocumented)
export const searchApiRef: ApiRef<SearchApi>;

// @public
export const SearchAutocomplete: SearchAutocompleteComponent;

// @public
export type SearchAutocompleteComponent = <Option>(
  props: SearchAutocompleteProps<Option>,
) => JSX.Element;

// @public
export const SearchAutocompleteDefaultOption: (
  props: SearchAutocompleteDefaultOptionProps,
) => JSX_2.Element;

// @public
export type SearchAutocompleteDefaultOptionProps = {
  icon?: ReactNode;
  primaryText: ListItemTextProps['primary'];
  primaryTextTypographyProps?: ListItemTextProps['primaryTypographyProps'];
  secondaryText?: ListItemTextProps['secondary'];
  secondaryTextTypographyProps?: ListItemTextProps['secondaryTypographyProps'];
  disableTextTypography?: ListItemTextProps['disableTypography'];
};

// @public (undocumented)
export type SearchAutocompleteFilterProps = SearchFilterComponentProps & {
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
};

// @public
export type SearchAutocompleteProps<Option> = Omit<
  AutocompleteProps<Option, undefined, undefined, boolean>,
  'renderInput' | 'disableClearable' | 'multiple'
> & {
  'data-testid'?: string;
  inputPlaceholder?: SearchBarProps['placeholder'];
  inputDebounceTime?: SearchBarProps['debounceTime'];
};

// @public
export const SearchBar: ForwardRefExoticComponent<
  Omit<Partial<SearchBarBaseProps>, 'ref'> & RefAttributes<unknown>
>;

// @public
export const SearchBarBase: ForwardRefExoticComponent<
  Omit<SearchBarBaseProps, 'ref'> & RefAttributes<unknown>
>;

// @public
export type SearchBarBaseProps = Omit<TextFieldProps, 'onChange'> & {
  debounceTime?: number;
  clearButton?: boolean;
  onClear?: () => void;
  onSubmit?: () => void;
  onChange: (value: string) => void;
  endAdornment?: ReactNode;
};

// @public
export type SearchBarProps = Partial<SearchBarBaseProps>;

// @public
export const SearchContextProvider: (
  props: SearchContextProviderProps,
) => JSX_2.Element;

// @public
export type SearchContextProviderProps =
  | PropsWithChildren<{
      initialState?: SearchContextState;
      inheritParentContextIfAvailable?: never;
    }>
  | PropsWithChildren<{
      initialState?: never;
      inheritParentContextIfAvailable?: boolean;
    }>;

// @public (undocumented)
export type SearchContextState = {
  term: string;
  types: string[];
  filters: JsonObject;
  pageLimit?: number;
  pageCursor?: string;
};

// @public (undocumented)
export type SearchContextValue = {
  result: AsyncState<SearchResultSet>;
  setTerm: Dispatch<SetStateAction<string>>;
  setTypes: Dispatch<SetStateAction<string[]>>;
  setFilters: Dispatch<SetStateAction<JsonObject>>;
  setPageLimit: Dispatch<SetStateAction<number | undefined>>;
  setPageCursor: Dispatch<SetStateAction<string | undefined>>;
  fetchNextPage?: DispatchWithoutAction;
  fetchPreviousPage?: DispatchWithoutAction;
} & SearchContextState;

// @public (undocumented)
export const SearchFilter: {
  (props: SearchFilterWrapperProps): JSX_2.Element;
  Checkbox(
    props: Omit<SearchFilterWrapperProps, 'component'> &
      SearchFilterComponentProps,
  ): JSX_2.Element;
  Select(
    props: Omit<SearchFilterWrapperProps, 'component'> &
      SearchFilterComponentProps,
  ): JSX_2.Element;
  Autocomplete(props: SearchAutocompleteFilterProps): JSX_2.Element;
};

// @public (undocumented)
export type SearchFilterComponentProps = {
  className?: string;
  name: string;
  label?: string;
  values?: FilterValue[] | ((partial: string) => Promise<FilterValue[]>);
  defaultValue?: string[] | string | null;
  valuesDebounceMs?: number;
};

// @public (undocumented)
export type SearchFilterWrapperProps = SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
};

// @public
export const SearchPagination: (props: SearchPaginationProps) => JSX_2.Element;

// @public
export const SearchPaginationBase: (
  props: SearchPaginationBaseProps,
) => JSX_2.Element;

// @public
export type SearchPaginationBaseProps = {
  className?: string;
  total?: number;
  cursor?: string;
  hasNextPage?: boolean;
  onCursorChange?: (pageCursor: string) => void;
  limit?: number;
  limitLabel?: ReactNode;
  limitText?: SearchPaginationLimitText;
  limitOptions?: SearchPaginationLimitOption[];
  onLimitChange?: (value: number) => void;
};

// @public
export type SearchPaginationLimitOption<
  Current extends number = 101,
  Accumulator extends number[] = [],
> = Accumulator['length'] extends Current
  ? Accumulator[number]
  : SearchPaginationLimitOption<
      Current,
      [...Accumulator, Accumulator['length']]
    >;

// @public
export type SearchPaginationLimitText = (params: {
  from: number;
  to: number;
  page: number;
  count: number;
}) => ReactNode;

// @public
export type SearchPaginationProps = Omit<
  SearchPaginationBaseProps,
  | 'pageLimit'
  | 'onLimitChange'
  | 'pageCursor'
  | 'onPageCursorChange'
  | 'hasNextPage'
>;

// @public
export const SearchResult: (props: SearchResultProps) => JSX_2.Element;

// @public
export const SearchResultApi: (
  props: SearchResultApiProps,
) => JSX.Element | null;

// @public
export type SearchResultApiProps = SearchResultContextProps & {
  query: Partial<SearchQuery>;
};

// @public
export const SearchResultComponent: (props: SearchResultProps) => JSX_2.Element;

// @public
export const SearchResultContext: (
  props: SearchResultContextProps,
) => JSX.Element | null;

// @public
export type SearchResultContextProps = {
  children: (
    state: AsyncState<SearchResultSet>,
    query: Partial<SearchQuery>,
  ) => JSX.Element | null;
};

// @public
export function SearchResultGroup<FilterOption>(
  props: SearchResultGroupProps<FilterOption>,
): JSX_2.Element;

// @public
export const SearchResultGroupFilterFieldLayout: (
  props: SearchResultGroupFilterFieldLayoutProps,
) => JSX_2.Element;

// @public
export type SearchResultGroupFilterFieldLayoutProps = PropsWithChildren<{
  label: string;
  value?: JsonValue;
  onDelete: () => void;
}>;

// @public
export type SearchResultGroupFilterFieldPropsWith<T> = T &
  SearchResultGroupFilterFieldLayoutProps & {
    onChange: (value: JsonValue) => void;
  };

// @public
export function SearchResultGroupLayout<FilterOption>(
  props: SearchResultGroupLayoutProps<FilterOption>,
): JSX_2.Element;

// @public
export type SearchResultGroupLayoutProps<FilterOption> = ListProps & {
  error?: Error;
  loading?: boolean;
  icon: JSX.Element;
  title: ReactNode;
  titleProps?: Partial<TypographyProps>;
  link?: ReactNode;
  linkProps?: Partial<LinkProps>;
  filterOptions?: FilterOption[];
  renderFilterOption?: (
    value: FilterOption,
    index: number,
    array: FilterOption[],
  ) => JSX.Element | null;
  filterFields?: string[];
  renderFilterField?: (key: string) => JSX.Element | null;
  resultItems?: SearchResult_2[];
  renderResultItem?: (
    value: SearchResult_2,
    index: number,
    array: SearchResult_2[],
  ) => JSX.Element | null;
  noResultsComponent?: ReactNode;
  disableRenderingWithNoResults?: boolean;
};

// @public
export type SearchResultGroupProps<FilterOption> = Pick<
  SearchResultStateProps,
  'query'
> &
  Omit<
    SearchResultGroupLayoutProps<FilterOption>,
    'loading' | 'error' | 'resultItems' | 'filterFields'
  >;

// @public
export const SearchResultGroupSelectFilterField: (
  props: SearchResultGroupSelectFilterFieldProps,
) => JSX_2.Element;

// @public
export type SearchResultGroupSelectFilterFieldProps =
  SearchResultGroupFilterFieldPropsWith<{
    children: ReactNode;
  }>;

// @public
export const SearchResultGroupTextFilterField: (
  props: SearchResultGroupTextFilterFieldProps,
) => JSX_2.Element;

// @public
export type SearchResultGroupTextFilterFieldProps =
  SearchResultGroupFilterFieldPropsWith<{}>;

// @public
export const SearchResultList: (props: SearchResultListProps) => JSX_2.Element;

// @public
export type SearchResultListItemExtensionOptions<
  Component extends (props: any) => JSX.Element | null,
> = {
  name: string;
  component: () => Promise<Component>;
  predicate?: (result: SearchResult_2) => boolean;
};

// @public
export type SearchResultListItemExtensionProps<Props extends {} = {}> = Props &
  PropsWithChildren<
    {
      rank?: number;
      result?: SearchDocument;
      noTrack?: boolean;
    } & Omit<ListItemProps, 'button'>
  >;

// @public
export const SearchResultListItemExtensions: (
  props: SearchResultListItemExtensionsProps,
) => JSX_2.Element;

// @public
export type SearchResultListItemExtensionsProps = Omit<ListProps, 'results'> & {
  results: SearchResult_2[];
};

// @public
export const SearchResultListLayout: (
  props: SearchResultListLayoutProps,
) => JSX_2.Element;

// @public
export type SearchResultListLayoutProps = ListProps & {
  error?: Error;
  loading?: boolean;
  resultItems?: SearchResult_2[];
  renderResultItem?: (
    value: SearchResult_2,
    index: number,
    array: SearchResult_2[],
  ) => JSX.Element | null;
  noResultsComponent?: ReactNode;
  disableRenderingWithNoResults?: boolean;
};

// @public
export type SearchResultListProps = Pick<SearchResultStateProps, 'query'> &
  Omit<SearchResultListLayoutProps, 'loading' | 'error' | 'resultItems'>;

// @public (undocumented)
export const SearchResultPager: () => JSX_2.Element;

// @public
export type SearchResultProps = Pick<SearchResultStateProps, 'query'> &
  Omit<SearchResultListItemExtensionsProps, 'results' | 'children'> & {
    children?: ReactNode | ((resultSet: SearchResultSet) => JSX.Element);
    noResultsComponent?: JSX.Element;
  };

// @public
export const SearchResultState: (
  props: SearchResultStateProps,
) => JSX_2.Element;

// @public
export type SearchResultStateProps = SearchResultContextProps &
  Partial<SearchResultApiProps>;

// @public (undocumented)
export const SelectFilter: (props: SearchFilterComponentProps) => JSX_2.Element;

// @public
export const useSearch: () => SearchContextValue;

// @public
export const useSearchContextCheck: () => boolean;

// @public
export const useSearchResultListItemExtensions: (
  children: ReactNode,
) => (result: SearchResult_2, key?: number) => JSX_2.Element;
```
