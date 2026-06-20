using System;

class Program
{
    static int LinearSearch(Product[] products, string name)
    {
        for (int i = 0; i < products.Length; i++)
        {
            if (products[i].ProductName == name)
                return i;
        }
        return -1;
    }

    static int BinarySearch(Product[] products, string name)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            int result =
                string.Compare(products[mid].ProductName, name);

            if (result == 0)
                return mid;

            if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return -1;
    }

    static void Main()
    {
        Product[] products =
        {
            new Product(1,"Laptop","Electronics"),
            new Product(2,"Mobile","Electronics"),
            new Product(3,"Shoes","Fashion"),
            new Product(4,"Watch","Accessories")
        };

        int linear =
            LinearSearch(products, "Shoes");

        Console.WriteLine(
            "Linear Search Index: " + linear);

        Array.Sort(products,
            (a, b) =>
            a.ProductName.CompareTo(b.ProductName));

        int binary =
            BinarySearch(products, "Shoes");

        Console.WriteLine(
            "Binary Search Index: " + binary);
    }
}
