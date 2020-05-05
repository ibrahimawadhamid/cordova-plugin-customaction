// Type definitions for CustomAction
// Project: https://github.com/ibrahimawadhamid/cordova-plugin-customaction
// Definitions by: Ibrahim Awad <https://github.com/ibrahimawadhamid> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CustomAction {
  
    /**
     * Invokes a custom action.
     * 
     * Define the `firstParameter` param
     * 
     * ```ts
     * 
     * 
     * //IOS
     * CustomAction.perform('some.random.param');
     * ```
     * 
     * @param firstParameter
     * @param success 
     * @param error 
     */
    show(firstParameter?: string, success?: Function, error?: Function): void;
  }
  
  declare var CustomAction: CustomAction;