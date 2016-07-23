/**
 * Created by Su on 2014/11/10.
 */
HomeModule.factory("HomeService",function(AppService,ResouceService){
    var restAngular = AppService.getRestAngular();
    var feedbackUrl = ResouceService.getFeedback();
    var orgsUrl = ResouceService.getOrgs();
    var feedback = restAngular.service(feedbackUrl);
    var orgs = restAngular.service(orgsUrl);

    return {
        getFeedback: function (feedbackVO) {
            return feedback.post(feedbackVO);
        },
        getCalculation: function(orgId,lineId,estimatedamount){
            return orgs.one(orgId).all('lines').all(lineId).all('waybill').all('roughEstimatedamount').post(estimatedamount);
        }
    }
});