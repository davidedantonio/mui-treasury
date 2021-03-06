import ButtonPage from 'pages/components/ButtonPage';
import CardPage from 'pages/components/CardPage';
import TabsPage from 'pages/components/TabsPage';
import InputPage from 'pages/components/InputPage';
import TextFieldPage from 'pages/components/TextFieldPage';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'button',
    path: '/components/button',
    primaryText: 'Button',
    secondaryText: `${ButtonPage.components.length} items`,
    Page: ButtonPage,
  },
  {
    id: 'card',
    path: '/components/card',
    primaryText: 'Card',
    secondaryText: `${CardPage.components.length} items`,
    Page: CardPage,
  },
  {
    id: 'tabs',
    path: '/components/tabs',
    primaryText: 'Tabs',
    secondaryText: `${TabsPage.components.length} items`,
    Page: TabsPage,
  },
  {
    id: 'inputs',
    path: '/components/inputs',
    primaryText: 'Input',
    secondaryText: `${InputPage.components.length} items`,
    Page: InputPage,
  },
  {
    id: 'text-fields',
    path: '/components/text-fields',
    primaryText: 'Text Field',
    secondaryText: `${TextFieldPage.components.length} items`,
    Page: TextFieldPage,
  },
];
