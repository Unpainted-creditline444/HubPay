using HubPay.Domain.Entities;
using HubPay.Domain.Repositories;
using HubPay.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace HubPay.Infrastructure.Repositories;

public class CustomerRepository : ICustomerRepository
{
    private readonly HubPayDbContext _context;

    public CustomerRepository(HubPayDbContext context)
    {
        _context = context;
    }

    public async Task<Customer?> GetByIdAsync(Guid id)
    {
        return await _context.Customers
            .SingleOrDefaultAsync(c => c.Id == id);
    }

    public async Task<IReadOnlyList<Customer>> ListAsync(int take = 20)
    {
        var safeTake = take <= 0 ? 20 : Math.Min(take, 100);
        return await _context.Customers
            .OrderByDescending(c => c.CreatedAt)
            .Take(safeTake)
            .ToListAsync();
    }

    public async Task AddAsync(Customer customer)
    {
        await _context.Customers.AddAsync(customer);
        await _context.SaveChangesAsync();
    }
}

