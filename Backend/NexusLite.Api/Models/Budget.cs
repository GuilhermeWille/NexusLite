namespace NexusLite.Api.Models
{
    public class Budget
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public Client? Client { get; set; }
        public decimal MaterialCost { get; set; }
        public decimal ServiceCost { get; set; }
    }
}