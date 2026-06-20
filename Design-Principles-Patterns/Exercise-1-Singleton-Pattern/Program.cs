using System;

public class Logger
{
    private static Logger instance;

    private Logger()
    {
        Console.WriteLine("Logger instance created");
    }

    public static Logger GetInstance()
    {
        if (instance == null)
        {
            instance = new Logger();
        }

        return instance;
    }

    public void Log(string message)
    {
        Console.WriteLine("LOG: " + message);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        Logger logger2 = Logger.GetInstance();

        logger1.Log("First message");
        logger2.Log("Second message");

        Console.WriteLine(
            "Both objects are same: " +
            Object.ReferenceEquals(logger1, logger2));
    }
}