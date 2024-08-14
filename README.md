# Project Documentation

## Introduction

In this project, we have wrapped all CoreUI components that are used in this application to ensure consistent styling, encapsulate custom logic, and simplify the component API. These wrapped components are located in their respective directories based on their function, such as `charts`, `forms`, `layout`, `navigation`, `ui-elements`, etc.

Using these wrapped components instead of the raw CoreUI components allows us to maintain a uniform design system and ensures that any updates or changes are applied across the entire application.

## Directory Structure

The wrapped components are organized as follows:

```plaintext
/src
└── /components
    ├── /charts
    ├── /forms
    ├── /layout
    ├── /navigation
    └── /ui-elements
```

**`/charts`**: Charts-related components (AppLineChart, etc)

**`/forms`**: Form-related components (AppForm, AppFormInput, etc)

**`/layout`**: Layout components (AppHeader, AppFooter, etc)

**`/navigation`**: Navigation components (AppSidebarNav, AppHeaderNav, etc)

**`/ui-elements`**: UI elements (AppButton, AppCard, etc)

## Wrapped Components

### `AppButton`

**Description**:
`AppButton` is a wrapper around CoreUI's `CButton`. It ensures consistent styling and behavior across the application.

**Props**:
`AppButton` accepts the same props as `CButton`, with the following additions:

- `className` (string): Additional custom classes.
- `color` (string): Button color, defaults to `"primary"`.

**Usage**:

```javascript
import { AppButton } from "src/components/ui-elements";

<AppButton color="secondary" className="custom-class">
  Click Me
</AppButton>;
```

### `AppCard`

**Description**:
`AppCard` is a wrapper around CoreUI's `CCard`. It ensures consistent styling and behavior across the application.

**Props**:
`AppCard` accepts the same props as `CCard`, with the following additions:

- `className` (string): Fixed to "mb-3" to maintain consistent margin.

**Usage**:

```javascript
import { AppCard, AppCardBody } from "src/components/ui-elements";

<AppCard>
  <AppCardBody>
    <h4>Card Title</h4>
    <p>Card content goes here.</p>
  </AppCardBody>
</AppCard>;
```

## Best Practices

- **Use Wrapped Components**: Always use the wrapped components (`AppButton`, `AppCard`, etc.) instead of directly the CoreUI components (`CButton`, `CCard`, etc.) to maintain consistency.
- **Consistent Styling**: Avoid adding inline styles or custom classes directly in the JSX. Instead, leverage the SCSS modules associated with the component.
- **Custom Logic**: If you need to add custom logic or behavior, consider extending the wrapped component rather than modifying it directly.
