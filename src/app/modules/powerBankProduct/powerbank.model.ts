import { Schema,model, Types } from 'mongoose';
import { TPowerBankProduct } from './powerbank.interface';

// Define subdocument schemas
const MainFeatureSchema = new Schema({
  capacity: { type: String, required: true },
  input: { type: String, required: true },
  output: { type: String, required: true },
  interface: { type: String, required: true },
  button: { type: String, required: true },
});

const PhysicalSpecificationSchema = new Schema({
  dimension: { type: String, required: true },
  color: { type: [String], required: true },
});

const WarrantyInfoSchema = new Schema({
  warranty: { type: String, required: true },
});

const SpecificationSchema = new Schema({
  mainFeature: { type: MainFeatureSchema, required: true },
  physicalSpecification: { type: PhysicalSpecificationSchema, required: true },
  warrantyInfo: { type: WarrantyInfoSchema, required: true },
});

const FeaturesSchema = new Schema({
  model: { type: String, required: true },
  capacity: { type: String, required: true },
  output: { type: String, required: true },
  fastCharging: { type: String, required: true },
  digitalDisplay: { type: String, required: true },
});

// Define main schema
const PowerBankProductSchema = new Schema({
 
  brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
  headphoneType: { type: String, required: true },
  productImage: { type: [String], required: true },
  price: { type: Number, required: true },
  regularPrice: { type: Number, required: true },
  color: { type: [String], required: true },
  name: { type: String, required: true },
  stock: { type: Boolean, required: true },
  features: { type: FeaturesSchema, required: true },
  specification: { type: [SpecificationSchema], required: true },
  description: { type: String, required: true },
  flashSale: { type: Boolean, required: true },
  discount: { type: Number, required: true },
  review: { type: Schema.Types.ObjectId, ref: 'Review', required: true },
  category: { type: String, required: true },
  isDeleted: { type: Boolean, required: true },
});

// Create model
export const PowerBankProductModel = model<TPowerBankProduct>(
    "PowerBankProduct",
    PowerBankProductSchema,
  );
