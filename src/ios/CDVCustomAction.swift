import UIKit

///
/// IOS implementation for Custom Action
///
/// - Author: @ibrahimawadhamid on May 5, 2020.
///
@objc(CDVCustomAction)
class CDVCustomAction: CDVPlugin {
    
    override func pluginInitialize() {
        NSLog("%@", "CustomActionPlugin initialized");
    }
    
    /**
     Perform a custom action on iOS

     - Parameters:
     - command: Get arguments and callback status from JS
     */
    func perform(_ command: CDVInvokedUrlCommand) {
        
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR)
        
        var firstParameter = command.argument(at: 0) as? String ?? ""
        
        if firstParameter.characters.count <= 0 {
            print("The ffirstParameter is required")
        }
        
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
        
    }
}
