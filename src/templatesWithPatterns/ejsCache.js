define([
    'common/util/ejs',
    'text!./contractClassStart.ejs',
    'text!./contractClassEnd.ejs',
    'text!./contractStates.ejs',
    'text!./contractFunctions.ejs',
    'text!./contractVariables.ejs',
    'text!./contractSingleTransition.ejs',
    'text!./contractSingleTransitionStart.ejs',
    'text!./contractSingleTransitionPlugins.ejs',
    'text!./contractSingleTransitionArguments.ejs',
    'text!./contractSingleTransitionArgumentsLinkToContract.ejs',
    'text!./contractSingleTransitionStartEnd.ejs',
    'text!./contractSingleTransitionReturn.ejs',
    'text!./contractSingleTransitionOutput.ejs',
    'text!./contractSingleTransitionRequireState.ejs',
    'text!./contractSingleTransitionRequireGuards.ejs',
    'text!./contractSingleTransitionGuards.ejs',
    'text!./contractSingleTransitionEndGuards.ejs',
    'text!./contractSingleTransitionStatements.ejs',
    'text!./contractSingleTransitionLinkToContract.ejs',
    'text!./contractSingleTransitionStateChange.ejs',
    'text!./contractUserDefinitions.ejs',
    'text!./contractTransitions.ejs',
    'text!./contractComplete.ejs',
    'text!./contractPlugins.ejs'
], function (ejs,
             classStart,
             classEnd,
             states,
             functions,
             variables,
             singleTransition,
             singleTransitionStart,
             singleTransitionPlugins,
             singleTransitionArguments,
             singleTransitionArgumentsLinkToContract,
             singleTransitionStartEnd,
             singleTransitionReturn,
             singleTransitionOutput,
             singleTransitionRequireState,
             singleTransitionRequireGuards,
             singleTransitionGuards,
             singleTransitionEndGuards,
             singleTransitionStatements,
             singleTransitionLinkToContract,
             singleTransitionStateChange,
             userDefinitions,
             transitions,
             complete,
             plugins) {

    return {
        contractType: {
            classStart: classStart,
            classEnd: classEnd,
            states: states,
            functions: functions,
            variables: variables,
            transitions: transitions,
            singleTransition: singleTransition,
            singleTransitionStart: singleTransitionStart,
            singleTransitionPlugins: singleTransitionPlugins,
            singleTransitionArguments: singleTransitionArguments,
            singleTransitionArgumentsLinkToContract: singleTransitionArgumentsLinkToContract,
            singleTransitionStartEnd: singleTransitionStartEnd,
            singleTransitionReturn: singleTransitionReturn,
            singleTransitionOutput: singleTransitionOutput,
            singleTransitionRequireState: singleTransitionRequireState,
            singleTransitionRequireGuards: singleTransitionRequireGuards,
            singleTransitionGuards: singleTransitionGuards,
            singleTransitionEndGuards: singleTransitionEndGuards,
            singleTransitionStatements: singleTransitionStatements,
            singleTransitionLinkToContract: singleTransitionLinkToContract,
            singleTransitionStateChange: singleTransitionStateChange,
            userDefinitions: userDefinitions,
            plugins: plugins,
            complete: ejs.render(complete, {
                classStart: classStart,
                classEnd: classEnd,
                functions: functions,
                variables: variables,
                states: states,
                plugins: plugins,
                transitions: transitions,
                userDefinitions: userDefinitions
            })
        }
    };
});
