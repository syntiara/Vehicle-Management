using System.IO;
using System.Linq;

namespace VEEGA_APP.Helpers
{
    
    public class AppSettings
    {
        public ConnectionStrings ConnectionStrings { get; set; }
        public ApplicationSettings ApplicationSettings { get; set; }
        public PhotoSettings PhotoSettings { get; set; }
    }

    public class ConnectionStrings
    {
        public string VeegaCoreEF { get; set; }
    }

    public class ApplicationSettings
    {
        public string ApplicationName { get; set; }
        public string Environment { get; set; }
    }

    public class PhotoSettings
    {
        public int MaxBytes { get; set; }
        public string[] AcceptedFileTypes { get; set; }

        public bool IsSupported(string fileName)
        {
            return AcceptedFileTypes.Any(s => s == Path.GetExtension(fileName).ToLower());
        }
    }

}
