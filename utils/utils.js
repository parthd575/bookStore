import mongoose from 'mongoose';
import { PurchaseHistory } from '../models/Purchase';

// Function to generate unique ID
const generateUniqueId = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  
    // Find the highest existing numeric increment id for the current month
    const lastRecord = await PurchaseHistory.findOne(
      { uniqueId: { $regex: `^${year}-${month}-\\d{3}$` } },
      { uniqueId: 1 },
    )
      .sort({ uniqueId: -1 })
      .limit(1);
  
    let numericIncrementId = 1;
  
    if (lastRecord) {
      // Extract the numeric increment id from the last record and increment it
      const lastNumericId = parseInt(lastRecord.uniqueId.split('-')[2]);
      numericIncrementId = lastNumericId + 1;
    }
  
    // Generate the new unique ID
    const newUniqueId = `${year}-${month}-${numericIncrementId.toString().padStart(3, '0')}`;
  
    return newUniqueId;
  };