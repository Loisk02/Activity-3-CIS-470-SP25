
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // BVT
    test('should return error for side a = 0 (lower limit)', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT
    test('should return error for side b = 0 (lower limit)', () => {
      expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT
    test('should return error for side c = 0 (lower limit)', () => {
      expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT
    test('should return error for side a = 201 (upper limit)', () => {
      expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT
    test('should return error for side b = 201 (upper limit)', () => {
      expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT: Boundary Value Testing - Upper boundary (side c = 201)
    test('should return error for side c = 201 (upper limit)', () => {
      expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // ECP
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 15)).toBe('Isosceles');
    });

    // ECP
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(7, 8, 9)).toBe('Scalene');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // ECP
    test('should return "Not a Triangle" for invalid triangle sides ', () => {
      expect(classifyTriangle(10, 10, 21)).toBe('Not a Triangle');
    });

    // BVT
    test('should return error for negative side lengths', () => {
      expect(classifyTriangle(-1, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // ECP
    test('should classify a small Scalene triangle', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
    });

    // ECP
    test('should classify a big Scalene triangle', () => {
      expect(classifyTriangle(199, 200, 200)).toBe('Scalene');
    });

    // ECP
    test('should classify a big Isosceles triangle', () => {
    expect(classifyTriangle(100, 100, 150)).toBe('Isosceles');
    });


    // ECP
    test('should return "Not a Triangle" for sides that do not satisfy triangle inequality', () => {
      expect(classifyTriangle(20, 40, 70)).toBe('Not a Triangle');
    });

    // ECP
    test('should classify an Equilateral triangle when all sides are equal', () => {
      expect(classifyTriangle(5, 5, 5)).toBe('Equilateral');
    });

    // BVT
  test('should classify a big Equilateral triangle', () => {
    expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
  });

  });
  