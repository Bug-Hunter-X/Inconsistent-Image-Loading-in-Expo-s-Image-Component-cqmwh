# Inconsistent Image Loading in Expo's Image Component

This repository demonstrates a bug in Expo's `Image` component where loading remote images is unreliable.  The component sometimes fails to load images, leaving a blank space or displaying a broken image icon without any indication of a loading error.  This inconsistency is difficult to debug because it is not reliably reproducible.

## Bug Description

The core issue lies in the `Image` component's error handling. When the image URI is temporarily unavailable (due to network issues or other factors), the component doesn't display a placeholder or fallback image, leaving a visual gap in the UI. This causes inconsistencies and makes the app less user-friendly.

## Reproduction Steps

1. Clone this repository.
2. Run the app using `expo start`.
3. Observe that some images may fail to load, leaving empty spaces.

## Solution

The provided solution demonstrates implementing robust error handling within the `Image` component using the `onError` prop and displaying a placeholder image until the main image loads successfully. This approach enhances the overall user experience by providing clear feedback and a consistent visual representation.