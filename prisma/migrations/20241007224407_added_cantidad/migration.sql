/*
  Warnings:

  - Added the required column `cantidad` to the `OrdenProductos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrdenProductos" ADD COLUMN     "cantidad" INTEGER NOT NULL;
