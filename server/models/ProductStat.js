import mongoose from 'mongoose'
const ProductStatsSchema = new mongoose.Schema(
    {
        productId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number
            }
        ],
        dailyData: [
            {
            date: String,
            totalSales: Number,
            totalUnits: Number
            }
        ]
    },
    { timestamps: true }
)
const ProductStat = mongoose.model('ProductStat', ProductStatsSchema)
export default ProductStat