# HOOKS HOOKS HOOKS

#### Goals of this Talk

-   what are react hooks?
-   why are they are so hyped?
-   how can i use them?

#### What?

-   new React Feature introduced in 16.8 (https://reactjs.org/docs/hooks-intro.html)
-   let you use React features like state, lifecycle, contextand more from a function — by doing a single function call.
-   turn complex problems into one-liners and you can share them across your application or with the React community
-   opt in, no breaking change
-   hooks reference: https://reactjs.org/docs/hooks-reference.html

#### Why?

-   https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib

    -   "We often can’t break complex components down any further because the logic is stateful and can't be extracted to a function or another component [...] That’s what people mean when they say React doesn't let them separate concerns."

        -   huge components
        -   duplicated logic
        -   complex patterns like render props and hocs
            -   hard to reason about
            -   intoduce a lot of unnecessary nesting into component tree
        -   Hooks let us organize logic inside a component with reusable isolated units
        -   they apply the React philosophy inside components (explicit data flow and composition inside components rather than just between components)
        -   https://twitter.com/prchdk/status/1056960391543062528

-   Hooks let you always use functions instead of having to constantly switch between functions, higher-order components render props and **classes**.
    -   no classes, no this, no binding issues
    -   everything is a function
    -   smaller bundle size (code using functions tends to minify better)

#### How to get started?

-   listen to this talk
-   learn 2 essential hooks `useState` and `useEffect`
-   give hooks a fair try and play with it. I think you’ll like it.

#### What's next?

-   write your own custom hooks :sunglasses:
-   community hooks
    -   apollo https://www.apollographql.com/docs/react/api/react-hooks
    -   redux https://react-redux.js.org/next/api/hooks
