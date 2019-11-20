#include <iostream>
using namespace std;
class PHANSO {
    float tu, mau;
public:
    PHANSO(){
        tu = mau = 0;
    }
    PHANSO(float x, float y){
        tu = x;
        mau =y;
    }
    void nhap() {
        cout << "nhap tu: "; cin >> tu;
        cout << "nhap mau: "; cin >> mau;
    }
    void xuat() {
        cout << tu << " / " << mau << endl;
    }
    float nhan(PHANSO b) {
        return tu*b.tu/mau*b.mau;
    }
    PHANSO operator*(PHANSO b) {
        //axb=ketqua
        PHANSO ketqua;
        ketqua.tu = tu * b.tu;
        ketqua.mau = mau * b.mau;
        return ketqua;
    }
    friend istream &operator>>(istream &x, PHANSO &y);
    friend ostream &operator<<(ostream &x, PHANSO y);
};

istream &operator>>(istream &x, PHANSO &y){
    cout << "Nhap tu so: "; x >> y.tu;
    cout << "Nhap mau so: ";    x >> y.mau;
    return x;
}

ostream &operator<<(ostream &x, PHANSO y){
    x << "(" << y.tu << "/" << y.mau << ")";
    return x;
}

int main() {
    PHANSO a;
    PHANSO b;
    PHANSO c(3, 4);

    // cach 1
    a.nhap();
    a.xuat();
    
    // cach 2
    cout << "--- Nhap phan so b ---"; cin >> b;
    cout << b;
    cout << c;


    cout << endl << "a x b = " << a.nhan(b) << endl;
    cout << "Cach 2: " << a*b << endl;
    return 0;
}