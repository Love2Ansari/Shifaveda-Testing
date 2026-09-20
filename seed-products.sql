insert into public.products(id,name,slug,price,mrp,stock,active,image,description,category) values
('alpha-xman-tila','ALPHA Xman Tila','alpha-xman-tila',599,990,100,true,'/products/tila-front.png','A traditional herbal massage oil presented for men’s personal wellness routines.','personal-care'),
('alpha-xman-powder','ALPHA Xman Powder','alpha-xman-powder',1299,2599,100,true,'/products/powder-front.png','A traditional herbal powder blend made with ingredients listed on the product label.','mens-wellness'),
('alpha-golden-capsules','ALPHA Xman Golden Capsules','alpha-golden-capsules',899,1799,100,true,'/products/capsules-front.png','A capsule-based herbal wellness product with ingredients displayed on the pack.','mens-wellness'),
('alpha-majoon','ALPHA Xman Majoon','alpha-majoon',1499,2699,100,true,'/products/majoon.png','A traditional herbal wellness preparation.','daily-wellness')
on conflict(id) do update set price=excluded.price,mrp=excluded.mrp,image=excluded.image,description=excluded.description,category=excluded.category;
