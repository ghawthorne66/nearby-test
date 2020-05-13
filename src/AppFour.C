public class ApiSampleController : Controller
{
  private const string api =
  "https://api.sidebox.com/plugin/nearbyreviews?storefronttoken={0}&state={1}&city={2}&zoomlevel={3}&radius={4}&showmap={5}&techemail={6}&mapscrollwheel={7}&fblike={8}&fbcomment={9}&agent={10}&count={11}";
  private const string StorefrontToken = "4cbcb86c-04ae-4949-af96-cd39efb25ab9";

  public ActionResult NearbyNowReviews(String State, String City)
  {
    var agent = Request.UserAgent;
    var wc = new WebClient();
    ViewBag.NearbyNowContent = wc.DownloadString(String.Format(api,
      HttpUtility.UrlEncode(StorefrontToken),
      HttpUtility.UrlEncode(State),
      HttpUtility.UrlEncode(City),
      "",   //  zoomlevel
      "",   //  radius
      "",   //  showmap
      "",   //  techemail
      "",   //  mapscrollwheel
      "",   //  fblike
      "",   //  fbcomment
      HttpUtility.UrlEncode(agent),
      "")
    ); //  count

    return View();
  }
}