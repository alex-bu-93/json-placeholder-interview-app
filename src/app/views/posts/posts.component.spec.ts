import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';
import { PostsComponent }            from './posts.component';
import { PostsService }              from './posts.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PostsComponent],
      providers: [PostsService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
