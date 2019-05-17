namespace VEEGA_APP.Helpers
{
    
    public class AppSettings
    {
        public Connectionstrings ConnectionStrings { get; set; }
        public Applicationsettings ApplicationSettings { get; set; }
    }

    public class Connectionstrings
    {
        public string VeegaCoreEF { get; set; }
    }

    public class Applicationsettings
    {
        public string ApplicationName { get; set; }
        public string Environment { get; set; }
    }

}
